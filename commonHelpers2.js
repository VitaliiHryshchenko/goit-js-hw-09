import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),m=`<label>
    <span class="text-label">Email</span>
    <input class="js-input-form-email" type="email" name="email" autofocus />
  </label>
  <label>
    <span class="text-label">Message</span>
    <textarea class="js-textarea-form-massage" name="message" rows="8"></textarea>
  </label>
  <button class="js-form-btn" type="submit">Submit</button>`;t.insertAdjacentHTML("beforeend",m);const e={email:"",message:""};t.addEventListener("input",l);function l(a){a.preventDefault(),a.target.name==="email"&&(e.email=a.target.value.trim()),a.target.name==="message"&&(e.message=a.target.value.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(e))}const n=document.getElementsByName("email"),o=document.getElementsByName("message"),s=localStorage.getItem("feedback-form-state");function r(){if(s){const a=JSON.parse(s);e.email=a.email,e.message=a.message,n[0].value=e.email,o[0].value=e.message}}r();t.addEventListener("submit",i);function i(a){if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",t.reset()}
//# sourceMappingURL=commonHelpers2.js.map
