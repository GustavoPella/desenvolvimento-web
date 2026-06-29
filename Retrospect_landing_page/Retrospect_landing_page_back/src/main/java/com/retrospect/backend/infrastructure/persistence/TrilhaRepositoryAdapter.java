package com.retrospect.backend.infrastructure.persistence;

import com.retrospect.backend.application.TrilhaRepositoryPort;
import com.retrospect.backend.domain.Trilha;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class TrilhaRepositoryAdapter implements TrilhaRepositoryPort {

    private final TrilhaJpaRepository jpaRepository;

    public TrilhaRepositoryAdapter(TrilhaJpaRepository jpaRepository) {
        this.jpaRepository = jpaRepository;
    }

    @Override
    public List<Trilha> findAll() {
        return jpaRepository.findAll();
    }

    @Override
    public Optional<Trilha> findById(Long id) {
        return jpaRepository.findById(id);
    }

    @Override
    public Trilha save(Trilha trilha) {
        return jpaRepository.save(trilha);
    }

    @Override
    public void deleteById(Long id) {
        jpaRepository.deleteById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return jpaRepository.existsById(id);
    }
}
