package de.steamcharts.topgames.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
@CrossOrigin
public class TestController {

    @GetMapping
    public String getHelloWorld() {
        return "Hello World!";
    }
}
