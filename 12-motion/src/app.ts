import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';
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

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // const image = new ImageComponent(
    //   'Image Title',
    //   'https://picsum.photos/600/300'
    // );
    // this.page.addChild(image);

    // const video = new VideoComponent(
    //   'Video Title',
    //   'https://www.youtube.com/embed/HPgHrbGPaFs'
    // );
    // this.page.addChild(video);

    // const note = new NoteComponent('Note Title', 'Note Body');
    // this.page.addChild(note);

    // const todo = new TodoComponent('Todo Title', 'Todo Item');
    // this.page.addChild(todo);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInpuit();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.SetOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.SetOnSubmitListener(() => {
        const image = new ImageComponent(inputSection.title, inputSection.url);
        this.page.addChild(image);
        dialog.removeFrom(dialogRoot);
      });
    });

    const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
    videoBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInpuit();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.SetOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.SetOnSubmitListener(() => {
        const video = new VideoComponent(inputSection.title, inputSection.url);
        this.page.addChild(video);
        dialog.removeFrom(dialogRoot);
      });
    });

    const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
    noteBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInpuit();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.SetOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.SetOnSubmitListener(() => {
        const note = new NoteComponent(inputSection.title, inputSection.body);
        this.page.addChild(note);
        dialog.removeFrom(dialogRoot);
      });
    });

    const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
    todoBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInpuit();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.SetOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.SetOnSubmitListener(() => {
        const todo = new TodoComponent(inputSection.title, inputSection.body);
        this.page.addChild(todo);
        dialog.removeFrom(dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
