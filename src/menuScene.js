import Phaser from './phaser.js';
import Firebase from './firebase.js';

export default class MenuScene extends Phaser.Scene {
  async create() {
    //await Firebase.setMap({'1,1': 'skull'});
    await Firebase.updateMap({'1,2': 'skull'});
    const map1 = await Firebase.getMap('map1');
    console.log(map1.data());
  }
}