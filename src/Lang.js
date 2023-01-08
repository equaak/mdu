import { makeAutoObservable } from "mobx";

class Lang{
  lang = 'En'

  constructor(props){
    makeAutoObservable(this, {}, {autoBind: true})
  }

  toggleRu(){
    if(this.lang === 'En'){
      this.lang = 'Ru'
    }
  }

  toggleEn(){
    if(this.lang === 'Ru'){
      this.lang = 'En'
    }
  }
}

const LangController = new Lang();

export default LangController;