function main() {

    return {
        mage(name) {
            return {
                name: name,
                health: 100,
                mana: 100,
                cast(spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`)
                }
            }
        },

        figher(name) {
            return {
                name: name,
                stamina: 100,
                health: 100,
                fight() {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            }
        }
    }

}