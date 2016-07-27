package br.com.fabricadeprogramador.ws.controller;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;

public class TokenFilter extends GenericFilterBean  {
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
			HttpServletRequest req = (HttpServletRequest) request;
			
			String header = req.getHeader("Authorization");
			
			if (header==null || !header.startsWith("Bearer ")){
				throw new ServletException("Token inexiste ou inválido");
			}
			
			String token = header.substring(7); // Extraindo somente a string do Token sem o Bearer
			
			//verificar se o token é valido
			try{
				Jwts.parser().setSigningKey("banana").parseClaimsJws(token).getBody();
				chain.doFilter(request, response);
			}catch(Exception e){
				((HttpServletResponse) response).sendError(HttpServletResponse.SC_UNAUTHORIZED, "Token Inválido!");
				//throw new ServletException("Token Inválido");
			}
			
			
	}
}
