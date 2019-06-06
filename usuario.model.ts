export interface Result {
    date: number;
    idRequest: number;
    responseCode: number;
    responseMsg: string;
    info: string;
    dataItemCount: number;
}

export interface ResultListItem extends Result {
    data: [{
        codUsuario: number;
        nomUsuario: string;
        desLogin: string;
        desEmail: string;
        desSenha: string;
        codCliente: number;
        codLingua: string;
    }];
}