// src/services/apiService.ts

import { DadosApi } from '../types';

export const fetchDados = async (): Promise<DadosApi[]> => {
    const response = await fetch('http://backendmonksdesafio.local/wp-json/minhaapi/v1/dados');
    if (!response.ok) {
        throw new Error('Erro ao buscar os dados');
    }
    const data = await response.json();
    return data;
};
