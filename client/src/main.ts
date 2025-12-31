import { cazarProducerView, talarProducerView } from "./producer/producer.dispatcher";

localStorage.setItem("app_version", "0.0.1");

cazarProducerView.render('#producer-cazar');
talarProducerView.render('#producer-talar')
