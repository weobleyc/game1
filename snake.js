class Game {
  constructor(){
    this.level = 1;
    this.Field = new Field();
    this.snake = new Snake();
    this.food = new Food();
  }

  input(eventKey){
    this.snake.turn(eventKey);
  }

  run(){
    
  }
}

class item {
  constructor(size, position){
    this.size = new Position;
    this.pos = new Position;
  }

  get position(){
    return this.pos;
  }
}

class Snake {
  constructor(){
    this.length = 1;
    this.pos = new Position;
    this.direction = new Direction;
    this.speed = 1;
  }

  move(){
    this.pos.add
  }

  grow(){
    this.length++;
  }

  turn(direction){
    this.direction.turn(direction);
  }

  get position(){
    return this.pos;
  }
}

class Food {
  constructor(){
    this.pos = [0,0];
  }

  get position(){
    return this.pos;
  }
}

class Field {
  constructor(){
    this.size = [16, 16];
  }
}

class Coordinates{
  constructor(x = 0, y = 0){
    this.coordinates = [x,y];
  }

  get x(){
    return this.coordinates[0];
  }

  get y(){
    return this.coordinates[1];
  }

  get coordinates(){
    return this.coordinates;
  }
}

class Position extends Coordinates{
  constructor(x = 0, y = 0){
    super(x, y);
  }

  move(speed){
    this.coordinates = [this.coordinates[0] + speed[0], this.coordinates[1] + this.speed[1]];
  }
}

class Direction extends Coordinates{
  constructor(x = 1, y = 0){
    super(x,y);
  }

  turn(){
    switch (eventKey) {
      case "ArrowDown":
        this.coordinates = [0, -1];
        break;
      case "ArrowUp":
        this.coordinates = [0, +1];
        break;
      case "ArrowLeft":
        this.coordinates = [-1, 0];
        break;
      case "ArrowRight":
        this.coordinates = [1, 0];
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  }
}

export {Game};