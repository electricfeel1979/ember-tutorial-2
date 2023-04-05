import Component from '@glimmer/component';
import { task, restartableTask } from 'ember-concurrency';
import { getRandomNumber } from '../utils/getRandNum';

export default class ExampleThreeComponent extends Component {
  //restartable, enqueue, drop, keepLatest
  @task({ enqueue: true })
  *getNumberTask() {
    const randNum = yield getRandomNumber();
    console.log('Received:', randNum);
    return randNum;
  }
}
