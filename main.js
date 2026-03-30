"use strict";

let pointer = {};

let effectType;
let effectColor;

// const DEBUG_TEXT = document.getElementById("debug");

// 開始時実行
document.addEventListener('DOMContentLoaded', function() {
    // 押した時実行
    document.addEventListener('pointerdown', function(e) {
        const X = e.pageX;
        const Y = e.pageY;
        effectType = Math.floor(Math.random() * 3);
        effectColor = Math.floor(Math.random() * 6);
        
        let particle;

        particle = document.createElement('div');

        if (effectType === 0) {
            particle.className = "particle-box";
        } else if (effectType === 1) {
            particle.className = "particle-circle";
        } else if (effectType === 2) {
            particle.className = "particle-triangle";
        }

        if (effectType === 0 || effectType === 1) {
            if (effectColor === 0) {
                particle.style.borderColor = "#88ffff";
            } else if (effectColor === 1) {
                particle.style.borderColor = "#ff88ff";
            } else if (effectColor === 2) {
                particle.style.borderColor = "#ffff44";
            } else if (effectColor === 3) {
                particle.style.borderColor = "#ffaaaa";
            } else if (effectColor === 4) {
                particle.style.borderColor = "#88ff88";
            } else if (effectColor === 5) {
                particle.style.borderColor = "#8888ff";
            }
        } else if (effectType === 2) {
            if (effectColor === 0) {
                particle.style.backgroundColor = "#88ffff";
            } else if (effectColor === 1) {
                particle.style.backgroundColor = "#ff88ff";
            } else if (effectColor === 2) {
                particle.style.backgroundColor = "#ffff44";
            } else if (effectColor === 3) {
                particle.style.backgroundColor = "#ffaaaa";
            } else if (effectColor === 4) {
                particle.style.backgroundColor = "#88ff88";
            } else if (effectColor === 5) {
                particle.style.backgroundColor = "#88ffff";
            }
        }

        particle.style.left = `${X - 10}px`;
        particle.style.top = `${Y - 10}px`;

        document.body.appendChild(particle);

        requestAnimationFrame(function () {
            particle.classList.add('is-active');
        });

        particle.addEventListener('transitionend', function () {
            particle.remove();
        }, { once: true });
    });
});