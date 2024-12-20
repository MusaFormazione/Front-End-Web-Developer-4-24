var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { HttpClient } from "../Modules/Http.js";
class HomePage {
    constructor() {
        this.apiUrl = 'http://localhost:3000/pizze';
        this.pizze = [];
        this.http = new HttpClient();
        this.target = document.querySelector('#target');
        this.getPizze();
    }
    getPizze() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pizze = yield this.http.get(this.apiUrl);
            this.costruisciRighe();
        });
    }
    costruisciRighe() {
        this.pizze.forEach((p, i) => {
            var _a;
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
                this.http.delete(`${this.apiUrl}/${p.id}`)
                    .then(() => {
                    tr.remove();
                });
            });
            azioniTd.append(editLink, deleteBtn);
            tr.append(idTd, gustoTd, prezzoTd, azioniTd);
            (_a = this.target) === null || _a === void 0 ? void 0 : _a.append(tr);
        });
    }
}
new HomePage();
//# sourceMappingURL=home.js.map