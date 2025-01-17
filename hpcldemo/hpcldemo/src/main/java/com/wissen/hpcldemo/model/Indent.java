package com.wissen.hpcldemo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="INDENT")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
public class Indent {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="INDENT_ID")
	private Long indentId;
	@Column(name = "CUSTOMER_ID")
	private Long customerId;
	@Column(name = "QUANTITY")
	private int quantity;
	@Column(name = "RECEIPE_ID")
	private Long recipeId;

}
