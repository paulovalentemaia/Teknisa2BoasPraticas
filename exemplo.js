const playerAttack = async (character, enemy) => {
    try {
        if (!getMouseButtonDown()) {
            //If mouse is not button is not pressed.
            return;
        }

        const movement = getMovement(character.movement);

        if (isSprinting(movement)) {
            console.log('Cannot attack while sprinting!');
            return;
        }

        const action = getAction(character.action);

        if (isBlocking(action)) {
            console.log('Cannot attack while blocking!');
            return;
        }

        character.status = statusCalculation(character);
        enemy.status = statusCalculation(enemy);

        const damage = await attack(character, enemy);
        console.log('Character ' + character.name + ' caused ' + damage + ' damage on the enemy ' + enemy.name);
    } catch (error) {
        rollbackGame();
        saveGame();
        throw error;
    }
}

//Status Calculation Character and Enemy
const statusCalculation = (entity) => {
    const offense = entity.offense * entity.level;
    const defense = entity.defense * entity.level;
    const crit = entity.crit;

    return {
        offense,
        defense,
        crit
    }
}