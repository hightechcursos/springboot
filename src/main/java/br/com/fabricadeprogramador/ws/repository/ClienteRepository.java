package br.com.fabricadeprogramador.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.fabricadeprogramador.ws.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente,Integer> {

}
