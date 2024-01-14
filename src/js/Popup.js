export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
    }
  
    open() {
      this._popup.classList.add('active'); 
      document.addEventListener('keydown', this._handleEscClose);
    }
  
    close() {
      this._popup.classList.remove('active'); 
      document.removeEventListener('keydown', this._handleEscClose);
   
    }
  
    _handleEscClose = (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    }
  
    setEventListeners() {
      this._popup.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('pop_up_close')) {
          this.close();
        }
      });
    }
  }
  
  