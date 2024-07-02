import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),n=document.querySelector(".js-input-form-email");document.querySelector(".js-textarea-form-massage");document.querySelector(".js-form-btn");n.addEventListener("input",s);t.addEventListener("submit",o);function s(e){console.log(e.currentTarget)}function o(e){e.preventDefault();const a=e.target.value;console.log(a)}const r=`<label>
    <span class="text-label">Email</span>
    <input class="js-input-form-email" type="email" name="email" autofocus />
  </label>
  <label>
    <span class="text-label">Message</span>
    <textarea class="js-textarea-form-massage" name="message" rows="8"></textarea>
  </label>
  <button class="js-form-btn" type="submit">Submit</button>`;t.insertAdjacentHTML("beforeend",r);
//# sourceMappingURL=commonHelpers2.js.map
