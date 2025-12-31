import { cazarProducerButton, cultivarProducerPasive, talarProducerButton } from "./producer/producer.dispatcher";

localStorage.setItem("app_version", "0.0.1");

cazarProducerButton.render('#producer-cazar');
talarProducerButton.render('#producer-talar');
cultivarProducerPasive.render('#producer-cultivar');
