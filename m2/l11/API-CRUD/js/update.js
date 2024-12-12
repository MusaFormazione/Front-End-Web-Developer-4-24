var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { environment } from './environment';
const form = document.getElementById('edit-form');
const gusto = document.getElementById('gusto');
const prezzo = document.getElementById('prezzo');
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        //Grazie ad URL search parames posso gestire i query params in maniera strutturata e controllata. 
        const url = new URLSearchParams(location.search); //Search è la proprietà di location che contiene i query params. 
        const id = url.get('id');
        if (!id) {
            location.href = '/index.html';
            return;
        }
        const pizza = yield getPizzaById(Number(id));
        gusto.value = pizza.gusto;
        prezzo.value = String(pizza.prezzo);
        form === null || form === void 0 ? void 0 : form.addEventListener('submit', e => {
            e.preventDefault();
            const pizza = {
                id: Number(id),
                gusto: gusto.value,
                prezzo: Number(prezzo.value)
            };
            updatePizza(pizza)
                .then(() => {
                alert('pizza modificata con successo');
            });
        });
    });
}
init();
function getPizzaById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${environment.apiUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    });
}
function updatePizza(pizza) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${environment.apiUrl}/${pizza.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pizza)
        });
        return response.json();
    });
}
//# sourceMappingURL=update.js.map