package br.com.cwi.api.service;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PasswordTokenPublicData {
    private final String email;
    private final Long createAtTimestamp;
}