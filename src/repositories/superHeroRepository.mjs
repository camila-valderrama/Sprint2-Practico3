import superHero from '../models/superHero.mjs';
import iRepository from './iRepository.mjs';

class superHeroRepository extends iRepository {
    async obtenerPorId(id) {
        return await superHero.findById(id);
    }

    async obtenerTodos() {
        return await superHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        const query = { [atributo]: new RegExp(valor, 'i') };
        return await superHero.find(query);
    }

    async obtenerMayoresDe30() {
        return await superHero.find( { edad: { $gt: 30 }, planetaOrigen: 'Tierra', $expr: {$gte: [{ $size: "$poderes"}, 2]}});
    }
}

export default new superHeroRepository;