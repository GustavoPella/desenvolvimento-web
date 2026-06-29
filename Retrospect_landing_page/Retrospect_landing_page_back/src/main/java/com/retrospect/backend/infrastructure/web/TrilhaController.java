package com.retrospect.backend.infrastructure.web;

import com.retrospect.backend.application.TrilhaService;
import com.retrospect.backend.domain.Trilha;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/trilhas")
public class TrilhaController {

    private final TrilhaService trilhaService;

    public TrilhaController(TrilhaService trilhaService) {
        this.trilhaService = trilhaService;
    }

    @GetMapping
    public List<Trilha> listar() {
        return trilhaService.listarTodas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Trilha> buscarPorId(@PathVariable Long id) {
        return trilhaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Trilha> cadastrar(@RequestBody Trilha trilha) {
        Trilha salva = trilhaService.cadastrar(trilha);
        return ResponseEntity.status(201).body(salva);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Trilha> atualizar(@PathVariable Long id, @RequestBody Trilha trilha) {
        return trilhaService.atualizar(id, trilha)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        boolean excluida = trilhaService.excluir(id);
        return excluida ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
