package com.educative.ecommerce.dto.user;

public class SignInReponseDto {

    private String status;
    private String token;
    private String type;

    public SignInReponseDto(String status, String token, String type) {
        this.status = status;
        this.token = token;
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}
