import { Component } from './components/component.js';
import {
  InputDialog,
  MediaData,
  TextData,
} from './components/dialog/dialog.js';
import { MediaSectionInpuit } from './components/dialog/input/media-input.js';
import { TextSectionInpuit } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from './components/page/page.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaSectionInpuit>(
      '#new-image',
      MediaSectionInpuit,
      (input: MediaSectionInpuit) => new ImageComponent(input.title, input.url)
    );
    this.bindElementToDialog<MediaSectionInpuit>(
      '#new-video',
      MediaSectionInpuit,
      (input: MediaSectionInpuit) => new VideoComponent(input.title, input.url)
    );
    this.bindElementToDialog<TextSectionInpuit>(
      '#new-note',
      TextSectionInpuit,
      (input: TextSectionInpuit) => new NoteComponent(input.title, input.body)
    );
    this.bindElementToDialog<TextSectionInpuit>(
      '#new-todo',
      TextSectionInpuit,
      (input: TextSectionInpuit) => new TodoComponent(input.title, input.body)
    );
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.SetOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });

      dialog.SetOnSubmitListener(() => {
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
