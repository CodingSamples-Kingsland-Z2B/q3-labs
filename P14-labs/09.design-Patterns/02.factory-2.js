function MemberFactory() {
    this.createMember = function(name, type) {
        let member;
        if (type == 'basic') {
            member = new BasicMember(name);
        } else if (type == 'standard') {
            member = new StandardMember(name);
        } else if (type == 'super') {
            member = new SuperMember(name);
        }
        member.type = type;
        member.summary = function() {
            console.log(`${this.name} ${this.type} $${this.cost}`)
        }
        return member;
    }

}

function BasicMember(name) {
    this.cost = 20;
    this.name = name;
}

function StandardMember(name) {
    this.cost = 40;
    this.name = name;
}

function SuperMember(name) {
    this.cost = 60;
    this.name = name;
}


function main() {
    let members = [];
    let factory = new MembweFactory();
    members.push(factory.createMember('john', 'basic'))
    members.push(factory.createMember('sally', 'super'))
    members.forEach(member => member.summary())
}

main();