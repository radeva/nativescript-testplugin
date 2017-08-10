import { Observable } from 'tns-core-modules/data/observable';
import { Testplugin } from 'nativescript-testplugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private testplugin: Testplugin;

  constructor() {
    super();

    this.testplugin = new Testplugin();
    this.message = this.testplugin.message;
  }
}
