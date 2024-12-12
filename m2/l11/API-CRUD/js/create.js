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
const form = document.getElementById('create-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const fields = document.querySelectorAll('#create-form input');
        const [gusto, prezzo] = fields;
        const newPizza = {
            gusto: gusto.value,
            prezzo: Number(prezzo.value)
        };
        createPizza(newPizza).then(pizzaResponse => {
            console.log(pizzaResponse.prezzo);
        });
    });
    function createPizza(newPizza) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(environment.apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPizza)
            });
            //fare controlli sulle response
            return response.json();
        });
    }
}
//# sourceMappingURL=create.js.map