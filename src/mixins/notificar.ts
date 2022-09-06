import { TipoDeNotificacao } from "@/interfaces/INotificacao";
import { store } from "@/store";
import { NOTIFICAR } from "@/store/types-mutations";

export const notificacaoMixin = {
    methods: {
        notificar(tipo: TipoDeNotificacao, titulo: string, texto: string): void {
            store.commit(NOTIFICAR, {
                titulo,
                texto,
                tipo,
            });
        },
    },
}