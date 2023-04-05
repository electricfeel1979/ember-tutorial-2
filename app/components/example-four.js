import Component from '@glimmer/component';
import { task } from 'ember-concurrency';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { getRandomNumber } from '../utils/getRandNum';

export default class ExampleFourComponent extends Component {
  //restartable, enqueue, drop, keepLatest
  @tracked
  hasError = false;

  @task
  *getNumberTask() {
    this.hasError = false;
    const randNum = yield getRandomNumber();
    console.log('Received:', randNum);
    if (randNum >= 50) {
      throw new Error('Something wrong!');
    }
    console.log('Received:', randNum);
    return randNum;
  }

  @action
  cancell() {
    this.getNumberTask.cancelAll();
  }
}
