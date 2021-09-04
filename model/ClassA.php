<?php
    
    class ClassA
    {
        function __constructor()
        {
        }
        
        public function f($a)
        {
            if (method_exists($this, $a)) {
                $this->$a();
            } else {
                echo "<strong class='alert-danger'>Error, I'am a method that !(exists)</strong>";
            }
        }
        
        public function m()
        {
            echo "<strong class='alert-success'>I'am a method that exists!</strong>";
        }
    }