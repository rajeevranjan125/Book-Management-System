package com.example.bookmanagement.repository;

import com.example.bookmanagement.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    Book findByTitle(String title);

    Book findById(Long id);

    Book findByAuthor(String author);

    Book deleteById(Long id);

    Book deleteByTitle(String title);
}
