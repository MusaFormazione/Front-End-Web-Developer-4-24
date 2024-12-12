var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { environment } from './environment.js';
import { Loader } from './Loader.js';
function getPizze() {
    return __awaiter(this, void 0, void 0, function* () {
        Loader.startLoading();
        const response = yield fetch(environment.apiUrl, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' }
        });
        Loader.stopLoading();
        //Controllo che la response non contenga errori 
        return response.json();
    });
}
function buildTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const target = document.querySelector('#target');
        const pizze = yield getPizze();
        pizze.forEach((p, i) => {
            const tr = document.createElement('tr');
            const idTd = document.createElement('td');
            const gustoTd = document.createElement('td');
            const prezzoTd = document.createElement('td');
            const azioniTd = document.createElement('td');
            const deleteBtn = document.createElement('button');
            const editLink = document.createElement('a');
            deleteBtn.classList.add('btn', 'btn-danger');
            editLink.classList.add('btn', 'btn-warning');
            idTd.innerText = String(i + 1);
            gustoTd.innerText = p.gusto;
            prezzoTd.innerText = p.prezzo + '€';
            deleteBtn.innerText = 'Elimina';
            editLink.innerText = 'Modifica';
            editLink.href = `/update.html?id=${p.id}`;
            deleteBtn.addEventListener('click', () => {
                deletePizza(p.id)
                    .then(() => {
                    tr.remove();
                });
            });
            azioniTd.append(editLink, deleteBtn);
            tr.append(idTd, gustoTd, prezzoTd, azioniTd);
            target === null || target === void 0 ? void 0 : target.append(tr);
        });
    });
}
buildTable();
function deletePizza(id) {
    return __awaiter(this, void 0, void 0, function* () {
        Loader.startLoading();
        try {
            const response = yield fetch(`${environment.apiUrl}/${id}`, {
                method: 'DELETE'
            });
            //mappatura dei codici d'errore
            return response.json();
        }
        catch (error) {
            //gestione dell'errore
            return null;
        }
        finally {
            Loader.stopLoading();
        }
    });
}
//# sourceMappingURL=home.js.map