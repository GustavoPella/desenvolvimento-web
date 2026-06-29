package com.retrospect.backend.infrastructure.persistence;

import com.retrospect.backend.domain.Trilha;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrilhaJpaRepository extends JpaRepository<Trilha, Long> {
}
