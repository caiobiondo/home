export interface User {
    date: number;
    idRequest: number;
    responseCode: number;
    responseMsg: string;
    info: string;
    dataItemCount: number;
}

export interface Usuario extends User {
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







