package com.example.demo.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.controller.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService extends ServiceImpl<UserMapper, User>{
    public boolean saveUser(User user) {
        return saveOrUpdate(user);
    }

    public boolean login(UserDto userDto) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", userDto.getUsername());
        queryWrapper.eq("password", userDto.getPassword());
        User one = getOne(queryWrapper);
        return one != null;
    }

//    @Autowired
//    private UserMapper userMapper;
//    public int save(User user) {
//        if(user.getId()==null){
//            return userMapper.insert(user);
//        }
//        else{
//            return userMapper.update(user);
//        }
//    }
}
