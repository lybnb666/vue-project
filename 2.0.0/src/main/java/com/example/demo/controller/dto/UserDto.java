package com.example.demo.controller.dto;

import lombok.Data;

//接受前端请求参数
@Data
public class UserDto {
    private String username;
    private String password;
}
