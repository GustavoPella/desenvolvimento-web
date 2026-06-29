package com.retrospect.backend.application;

import com.retrospect.backend.domain.Trilha;

import java.util.List;
import java.util.Optional;

public interface TrilhaRepositoryPort {

    List<Trilha> findAll();

    Optional<Trilha> findById(Long id);

    Trilha save(Trilha trilha);

    void deleteById(Long id);

    boolean existsById(Long id);
}
