import { isAuth, sendMsg } from "../helpers";

export default class Catalog {

    getHome() {

        const viewData = { loggedIn: isAuth() }

        if (!isAuth() && allTeams.length != 0) {
            let team = allTeams.find(team => team.members._id === sessionStorage.getItem('user'))

            if (team) {
                viewData.hasTeam = true;
                viewData.teamId = team._id;
            }
        }

        this.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function() {
            this.render('../templates/home/home.hbs', viewData).swap()
        })



    }


    getAbout() {
        const viewData = { loggedIn: isAuth() }

        this.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function() {
            this.render('../templates/about/about.hbs', viewData).swap()
        })
    }

    getCatalogs() {
        const viewData = { loggedIn: isAuth(), teams: allTeams }
            //check if the user is a member of any team 


        // [_id, name, comments, members:[{_id, username}], creator]

        let teamMember;
        let creator;
        if (allTeams.length >= 1) {
            let allMembers = [];
            allTeams.forEach(team => {
                allMembers = allMembers.concat(team.members)
            })

            teamMember = allMembers.find(member => member._id === sessionStorage.getItem('user'))
                // creator = allTeams.find(member => member.creator === sessionStorage.getItem('user'))
        }

        if (teamMember) {
            viewData.hasNoTeam = false;
        } else {
            viewData.hasNoTeam = true;
        }

        this.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            team: '../templates/catalog/team.hbs'

        }).then(function() {
            this.render('../templates/catalog/teamCatalog.hbs', viewData).swap()
        })


    }

    getDetail() {
        let id = this.params.id;
        const viewData = { loggedIn: isAuth() }
        let team = allTeams.find(team => team._id == id);


        if (team) {
            viewData.members = team.members;
            viewData.name = team.name;
            viewData.comment = team.comment;
            viewData.isAuthor = team.creator === sessionStorage.getItem('user');
            viewData.isOnTeam = team.members.find(member => member.username === sessionStorage.getItem('username'))
            viewData.teamId = team._id;
        }

        this.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            teamMember: '../templates/catalog/teamMember.hbs',
            teamControls: '../templates/catalog/teamControls.hbs'

        }).then(function() {
            this.render('../templates/catalog/details.hbs', viewData).swap()
        })
    }



    getCreate() {
        const viewData = { loggedIn: isAuth() }
        this.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            createForm: '../templates/create/createForm.hbs',

        }).then(function() {
            this.render('../templates/create/createPage.hbs', viewData).swap()
        })
    }


    postCreate() {
        let { name, comment } = this.params;

        if (!name) {
            sendMsg('error', 'Team name is required', 2);
            this.redirect('#/create');
            return
        }

        let serverData = {
            members: [{
                _id: sessionStorage.getItem('user'),
                username: sessionStorage.getItem('username')
            }],
            name,
            comment,
            creator: sessionStorage.getItem('user')
        }

        db.post('teams', serverData, null, { username: 'guest', password: 'guest' }).then(res => {
            sendMsg('info', 'Team created Successfuly !', 2);
            allTeams.push(res);
            this.redirect('#/catalog')
        })
    }


    getEdit() {
        let id = this.params.id;
        const viewData = { loggedIn: isAuth() }
        let team = allTeams.find(team => team._id == id)

        if (team) {
            viewData.name = team.name;
            viewData.comment = team.comment;
            viewData.teamId = team._id
        }


        this.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            editForm: '../templates/edit/editForm.hbs',

        }).then(function() {
            this.render('../templates/edit/editPage.hbs', viewData).swap()
        })
    }

    postEdit() {

        let { name, comment, id } = this.params;

        let team = allTeams.find(team => team._id == id);
        if (!name) {
            sendMsg('error', 'Team name is required', 2);
            this.redirect(`#/edit/${id}`);
            return
        }

        team.name = name;
        team.comment = comment;
        db.edit('teams', id, team, null, { username: 'guest', password: 'guest' }).then(res => {
            sendMsg('info', 'Team edited Successfuly !', 2);
            let teamIndex = allTeams.findIndex(t => t._id == id);
            allTeams[teamIndex] = team;
            this.redirect('#/catalog')
        })

    }


    getJoin() {
        let id = this.params.id;
        let team = allTeams.find(t => t._id === id);

        let exist = team.members.find(item => item._id === sessionStorage.getItem('user'))

        if (exist) {
            sendMsg('error', 'You already a member of that Team', 2);
            this.redirect(`#/catalog/${id}`);
            return
        }


        team.members.push({
            _id: sessionStorage.getItem('user'),
            username: sessionStorage.getItem('username')
        })

        db.edit('teams', id, team, null, { username: 'guest', password: 'guest' }).then(res => {
            sendMsg('info', 'Joined Team Successfuly !', 2);
            let index = allTeams.findIndex(t => t._id == id);
            allTeams[index].members.push(res)
            this.redirect(`#/catalog/${id}`)
        })
    }

    getLeave() {

        let id = this.params.id;
        let team = allTeams.find(t => t._id == id);

        if (team) {

            let index = team.members.findIndex(m => m._id === sessionStorage.getItem('user'));
            team.members.splice(index, 1)
            db.edit('teams', id, team, null, { username: 'guest', password: 'guest' }).then(res => {
                let index = allTeams.findIndex(t => t._id == id)
                allTeams[index].members = res.members;
                sendMsg('info', 'Leave Team ', 2);
                this.redirect(`#/catalog/${res._id}`);
            })

        }
    }
}