import { $ } from "./utils/helpers";
import { producerView } from "./producer/producer.dispatcher";

localStorage.setItem("app_version", "0.0.1");

const btn = $('#main-btn');
const span = $('#main-btn-clicks');

let counter = 0;

btn?.addEventListener("click", () => {
  if (span) span.textContent = counter++ as unknown as string;
})

producerView.render();
