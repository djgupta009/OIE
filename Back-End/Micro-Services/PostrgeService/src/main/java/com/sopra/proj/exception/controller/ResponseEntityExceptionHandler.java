package com.sopra.proj.exception.controller;

import java.util.Date;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import com.sopra.proj.exception.ResourceNotFoundException;
import com.sopra.proj.exception.bean.ExceptionResponseBean;

import javassist.NotFoundException;

@Order(Ordered.HIGHEST_PRECEDENCE)
@RestControllerAdvice
public class ResponseEntityExceptionHandler {
	
	
	@ExceptionHandler(ResourceNotFoundException.class)
	  public final ResponseEntity<ExceptionResponseBean> handleResourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
		ExceptionResponseBean exceptionDetails = new ExceptionResponseBean(HttpStatus.NOT_FOUND,new Date(), ex.getMessage(),
		 request.getDescription(false));
	    return new ResponseEntity<ExceptionResponseBean>(exceptionDetails,HttpStatus.NOT_FOUND);
	  }
	
	@ExceptionHandler(DataIntegrityViolationException.class)
	  public final ResponseEntity<ExceptionResponseBean> handleDataIntegrityViolationException(DataIntegrityViolationException ex, WebRequest request) {
		ExceptionResponseBean exceptionDetails = new ExceptionResponseBean(HttpStatus.CONFLICT,new Date(), ex.getMessage(),
		 request.getDescription(false));
	    return new ResponseEntity<ExceptionResponseBean>(exceptionDetails,HttpStatus.CONFLICT);
	  }
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ExceptionResponseBean> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex,WebRequest request) {
		ExceptionResponseBean exceptionDetails = new ExceptionResponseBean(HttpStatus.BAD_REQUEST,new Date(), ex.getMessage(),
				 request.getDescription(false));
	    	    return new ResponseEntity<ExceptionResponseBean>(exceptionDetails,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(NotFoundException.class)
	public final ResponseEntity<ExceptionResponseBean> handleNotFoundException (NotFoundException ex, WebRequest request) {
		ExceptionResponseBean exceptionDetails = new ExceptionResponseBean(HttpStatus.NOT_FOUND,new Date(), ex.getMessage(),
	      request.getDescription(false));
	  return new ResponseEntity<>(exceptionDetails, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(Exception.class)
	public final ResponseEntity<ExceptionResponseBean> handleAllExceptions(Exception ex, WebRequest request) {
		ExceptionResponseBean exceptionDetails = new ExceptionResponseBean(HttpStatus.INTERNAL_SERVER_ERROR,new Date(), ex.getMessage(),
	      request.getDescription(false));
	  return new ResponseEntity<>(exceptionDetails, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
