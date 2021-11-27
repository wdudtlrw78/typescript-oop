import { BaseComponent, Component } from '../component.js';
import { Composable } from '../page/page.js';

type OnCloseListener = () => void;
type SetOnsubmitListener = () => void;

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  closeListener?: OnCloseListener;
  submitListener?: SetOnsubmitListener;
  constructor() {
    super(`
    <dialog class="dialog">
      <div class="dialog__container">
        <button class="close">&times;</button>
        <div id="dialog__body"></div>
        <button class="dialog__submit">ADD</button>
      </div>
    </dialog>
  `);
    const closeBtn = this.element.querySelector('.close')! as HTMLElement;
    const submitBtn = this.element.querySelector(
      '.dialog__submit'
    )! as HTMLElement;

    // 이벤트는 내부적으로 처리하는 것이 아니라 리스너를 외부로 주입받아서 등록된 리스너가 있다면 호출해 주는 방식으로 해야한다.
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  SetOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  SetOnSubmitListener(listener: SetOnsubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component) {
    const body = this.element.querySelector('#dialog__body')! as HTMLElement;
    child.attachTo(body);
  }
}
