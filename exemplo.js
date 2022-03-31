const playerAttack = async(character, enemy) => {
    if (!getMouseButtonDown()) {
        //Atack can't occur if mouse isn't pressed.
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

    //Character Status Calculation
    character.status.offense = character.offense * character.level;
    character.status.defense = character.defense * character.level;
    character.status.crit = character.critChance;

    //Enemy Status Calculation
    enemy.status.offense = enemy.offense * enemy.level;
    enemy.status.defense = enemy.defense * enemy.level;
    enemy.status.crit = enemy.critChance;

    const damage = await attack(character, enemy);
    console.log('Character ' + character.name + ' caused ' + damage + ' damage on the enemy ' + enemy.name);
}