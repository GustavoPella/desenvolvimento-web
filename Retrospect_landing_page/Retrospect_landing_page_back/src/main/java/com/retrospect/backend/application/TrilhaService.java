package com.retrospect.backend.application;

import com.retrospect.backend.domain.Trilha;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrilhaService {

    private final TrilhaRepositoryPort trilhaRepository;

    public TrilhaService(TrilhaRepositoryPort trilhaRepository) {
        this.trilhaRepository = trilhaRepository;
    }

    public List<Trilha> listarTodas() {
        return trilhaRepository.findAll();
    }

    public Optional<Trilha> buscarPorId(Long id) {
        return trilhaRepository.findById(id);
    }

    public Trilha cadastrar(Trilha trilha) {
        trilha.setId(null);
        return trilhaRepository.save(trilha);
    }

    public Optional<Trilha> atualizar(Long id, Trilha dadosAtualizados) {
        return trilhaRepository.findById(id).map(trilhaExistente -> {
            trilhaExistente.setNome(dadosAtualizados.getNome());
            trilhaExistente.setLocalizacao(dadosAtualizados.getLocalizacao());
            trilhaExistente.setDificuldade(dadosAtualizados.getDificuldade());
            trilhaExistente.setDescricao(dadosAtualizados.getDescricao());
            return trilhaRepository.save(trilhaExistente);
        });
    }

    public boolean excluir(Long id) {
        if (!trilhaRepository.existsById(id)) {
            return false;
        }
        trilhaRepository.deleteById(id);
        return true;
    }
}
