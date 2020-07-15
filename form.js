class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('continue');
   
   
    
  }
  hide(){
  
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    
    var title = createElement('h1')
    title.html("Big Brain Quiz");
    title.position(650,50);
    title.size(50)

    this.input.position(650,250);
    this.button.position(650,275);

    
  
 

   
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
     

      

      this.button2 = createButton("SCIENCE");
      this.button2.position(450,325);
      this.button2.size(50);

      this.button3 = createButton("SOCIAL")
      this.button3.position(450,375);
      this.button3.size(50);
     
      this.button4 = createButton("MATH")
      this.button4.position(450,425)
      this.button4.size(50);

        this.button2.mousePressed(()=>{
        this.input.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        
       
  
        
  
        this.button5 = createButton("CHEMISTRY");
        this.button5.position(450,325);
        this.button5.size(50);
  
        this.button6 = createButton("PHYSICS")
        this.button6.position(450,375);
        this.button6.size(50);
       
        this.button7 = createButton("BIOLOGY")
        this.button7.position(450,425)
        this.button7.size(50);

        this.button5.mousePressed(() =>{
          this.score = 0;
           this.points = createElement("h4", "SCORE = " +this.score)
           this.points.position(800,250)
          this.input.hide();
           this.button5.hide();
           this.button6.hide();
           this.button7.hide();
           
           
           

           this.question1 = createElement("h4", "Q1. WHAT IS THE SYMBOL OF HELIUM ON THE PEROIDIC TABLE?")
           this.question1.position(250,400)
           this.input2 = createInput("");
           this.input2.position(275,440)
          
           this.next = createButton("Next")
           this.next.position(600,600)
           

           
           this.next.mousePressed (()=>{
             if( this.input2.value("He")){ 
           
           this.score =this.score + 1;
            this.question1.hide();
            this.input2.hide();
            this.next.hide();
            this.question2 = createElement("h4", "Q2. WHAT IS PHENOMENON CALLED WHEN A SOLID IS TURNED INTO GAS WITHOUT GOING THROUGH THE LIQUID STATE?")
            this.question2.position(250,400)
            this.input3 = createInput("");
            this.input3.position(275,440)
            this.next1 = createButton("Next")
            this.next1.position(600,600)
          

            this.next1.mousePressed(()=>{
              if( this.input3.value("Sublimation")){ 
             
            this.score =this.score + 1;
             this.question2.hide();
             this.input3.hide();
             this.next1.hide();
             this.question3 = createElement("h4", "Q3. WHICH IS THE ELEMENT THAT COMES HALF Athis.score AFTER MAGNESIUM ?")
             this.question3.position(250,400)
             this.input4 = createInput("");
             this.input4.position(275,440)
             this.next2 = createButton("Next")
             this.next2.position(600,600)
            

            this.next2.mousePressed(()=>{
              if( this.input4.value("Titanium")){ 
           
            this.score =this.score + 1;
             this.question3.hide();
             this.input4.hide();
             this.next2.hide();
             this.question4 = createElement("h4", "Q4. WHAT IS THE ELEMENT WHICH IS NAMED AFTER A STATE IN USA  ?")
             this.question4.position(250,400)
             this.input5 = createInput("");
             this.input5.position(275,440)
             this.next3 = createButton("Next")
             this.next3.position(600,600)

             this.next3.mousePressed(()=>{
              if( this.input5.value("Californium")){ 
                
            this.score =this.score + 1;
             this.question4.hide();
             this.input5.hide();
             this.next3.hide();
             this.question5 = createElement("h4", "Q5. WHO INVENTED THE PERIODIC TABLE ?")
             this.question5.position(250,400)
             this.input6 = createInput("");
             this.input6.position(275,440)
             this.next4 = createButton("Next")
             this.next4.position(600,600)

             this.next4.mousePressed(()=>{
              if( this.input6.value("Dmriti Mendeleev")){ 
             
            this.score =this.score + 1;
             this.question5.hide();
             this.input6.hide();
             this.next4.hide();
             this.question6 = createElement("h4", "Q6. WHAT ACID IS PRESENT IN VINEGAR ?")
             this.question6.position(250,400)
             this.input7 = createInput("");
             this.input7.position(275,440)
             this.next5 = createButton("Next")
             this.next5.position(600,600)

             this.next5.mousePressed(()=>{
              if( this.input7.value("Acetic Acid")){ 
            
            this.score =this.score + 1;
             this.question6.hide();
             this.input7.hide();
             this.next5.hide();
             this.question7 = createElement("h4", "Q7. NAME A FOSSIL FUEL WHICH IS FOUND IN THE SOLID STATE ?")
             this.question7.position(250,400)
             this.input8 = createInput("");
             this.input8.position(275,440)
             this.next6 = createButton("Next")
             this.next6.position(600,600)

             this.next6.mousePressed(()=>{
              if( this.input8.value("Coal")){ 
             
            this.score =this.score + 1;
             this.question7.hide();
             this.input8.hide();
             this.next6.hide();
             this.question8 = createElement("h4", "Q8. WHAT IS THE HARDEST SUBSTANCE ON EARTH  ?")
             this.question8.position(250,400)
             this.input9 = createInput("");
             this.input9.position(275,440)
             this.next7 = createButton("Next")
             this.next7.position(600,600)

             this.next7.mousePressed(()=>{
              if( this.input9.value("Diamond")){ 
           
            this.score =this.score + 1;
             this.question8.hide();
             this.input9.hide();
             this.next7.hide();
             this.question9 = createElement("h4", "Q9. WHICH GEMSTOME IS PURPLE IN COLOUR ?")
             this.question9.position(250,400)
             this.input10 = createInput("");
             this.input10.position(275,440)
             this.next8 = createButton("Next")
             this.next8.position(600,600)

             this.next8.mousePressed(()=>{
              if( this.input10.value("Amythest")){ 
            
            this.score =this.score + 1;
             this.question9.hide();
             this.input10.hide();
             this.next8.hide();
             this.question10 = createElement("h4", "Q10. WHICH NON-METAL IS THE BEST CONDUCTOR OF HEAT ?")
             this.question10.position(250,400)
             this.input11 = createInput("");
             this.input11.position(275,440)
             this.next9 = createButton("Next")
             this.next9.position(600,600)

             this.next9.mousePressed(()=>{
              if( this.input11.value("Graphite")){ 
            
            this.score = this.score + 1;
             this.question10.hide();
             this.input11.hide();
             this.next9.hide();
                
             this.zzz = createElement("h4", "THANKS FOR PLAYING")
             this.zzz.position(700,400)
             this.next10 = createButton("Next")
             this.next10.position(600,600)
             
             this.next10.mousePressed(()=>{
              
          
             this.next10.hide();
              this.zzz.hide(); 
              this.points.position(900,300)
              this.answers = createElement("h4", "Q1. Answer is He")
              this.answers.position(600,250)
              this.answers1 = createElement("h4", "Q2. Answer is Sublimation")
              this.answers1.position(600,300)
              this.answers2 = createElement("h4", "Q3. Answer is Titanium")
              this.answers2.position(600,350)
              this.answers3 = createElement("h4", "Q4. Answer is Californium")
              this.answers3.position(600,400)
              this.answers4 = createElement("h4", "Q5. Answer is Dmriti Mendeleev")
              this.answers4.position(600,450)
              this.answers5 = createElement("h4", "Q6. Answer is Acetic Acid")
              this.answers5.position(600,500)
              this.answers6 = createElement("h4", "Q7. Answer is Coal")
              this.answers6.position(600,550)
              this.answers7 = createElement("h4", "Q8. Answer is Diamond")
              this.answers7.position(600,600)
              this.answers8 = createElement("h4", "Q9. Answer is Amythest")
              this.answers8.position(600,650)
              this.answers9 = createElement("h4", "Q10. Answer is Graphite")
              this.answers9.position(600,700)



             this.back1 = createButton("Back")
             this.back1.position(900,600)

             this.back1.mousePressed(()=>{
              this.back1.hide();
              this.answers.hide()
              this.answers1.hide()
              this.answers2.hide()
              this.answers3.hide()
              this.answers4.hide()
              this.answers5.hide()
              this.answers6.hide();
              this.answers7.hide()
              this.answers8.hide()
              this.answers9.hide()

              this.button2.show();
              this.button3.show();
              this.button4.show();

              this.points.hide()
              



             })
              
            });

              }
            });

              }
            });

              }
            });

              }
            });

              }
            });

              }
            });

              }
            });

            
            }
            });
          }
        });

          } 
        });
          
     
})

this.button6.mousePressed(() =>{
  this.score2 = 0;
   this.points1 = createElement("h4", "SCORE = " +this.score2)
   this.points1.position(800,250)
  this.input.hide();
   this.button5.hide();
   this.button6.hide();
   this.button7.hide();
   
   
   

   this.question11 = createElement("h4", "Q1. WHAT IS THE INSTRUMENT USED TO MEASURE HUMIDITY ?")
   this.question11.position(250,400)
   this.input12 = createInput("");
   this.input12.position(275,440)
  
   this.next11 = createButton("Next")
   this.next11.position(600,600)
   

   
   this.next11.mousePressed (()=>{
     if( this.input12.value("Hygrometer")){ 
   
   this.score2 =this.score2 + 1;
    this.question11.hide();
    this.input12.hide();
    this.next11.hide();
    this.question12 = createElement("h4", "Q2. WHAT IS THE S.I. UNIT OF FORCE?")
    this.question12.position(250,400)
    this.input13 = createInput("");
    this.input13.position(275,440)
    this.next12 = createButton("Next")
    this.next12.position(600,600)
  

    this.next12.mousePressed(()=>{
      if( this.input13.value("Newton")){ 
     
    this.score2 =this.score2 + 1;
     this.question12.hide();
     this.input13.hide();
     this.next12.hide();
     this.question13 = createElement("h4", "Q3. WHAT IS THE UNIT TO DISTANCE BETWEEN PLANETS AND COSMIC BODIES ?")
     this.question13.position(250,400)
     this.input14 = createInput("");
     this.input14.position(275,440)
     this.next13 = createButton("Next")
     this.next13.position(600,600)
    

    this.next13.mousePressed(()=>{
      if( this.input14.value("Light Year")){ 
   
    this.score2 =this.score2 + 1;
     this.question13.hide();
     this.input14.hide();
     this.next13.hide();
     this.question14 = createElement("h4", "Q4. WHAT IS THE FARHENHEIT VALUE OF 0 DEGREE CELSIUS ?")
     this.question14.position(250,400)
     this.input15 = createInput("");
     this.input15.position(275,440)
     this.next14 = createButton("Next")
     this.next14.position(600,600)

     this.next14.mousePressed(()=>{
      if( this.input15.value("32")){ 
        
    this.score =this.score + 1;
     this.question14.hide();
     this.input15.hide();
     this.next14.hide();
     this.question15 = createElement("h4", "Q5. WHICH IS THE NEAREST STAR TO EARTH AFTER THE SUN ?")
     this.question15.position(250,400)
     this.input16 = createInput("");
     this.input16.position(275,440)
     this.next15 = createButton("Next")
     this.next15.position(600,600)

     this.next15.mousePressed(()=>{
      if( this.input16.value("Proxima Centurai")){ 
     
    this.score2 =this.score2 + 1;
     this.question15.hide();
     this.input16.hide();
     this.next15.hide();
     this.question16 = createElement("h4", "Q6. WHO STATED THE THEORY OF RELATIVITY ?")
     this.question16.position(250,400)
     this.input17 = createInput("");
     this.input17.position(275,440)
     this.next16 = createButton("Next")
     this.next16.position(600,600)

     this.next16.mousePressed(()=>{
      if( this.input17.value("Albert Einstein")){ 
    
    this.score2 =this.score2 + 1;
     this.question16.hide();
     this.input17.hide();
     this.next16.hide();
     this.question17 = createElement("h4", "Q7. WHO INVENTED THE FIRST TV ?")
     this.question17.position(250,400)
     this.input18 = createInput("");
     this.input18.position(275,440)
     this.next17 = createButton("Next")
     this.next17.position(600,600)

     this.next17.mousePressed(()=>{
      if( this.input18.value("John Logie Baird")){ 
     
    this.score2 =this.score2 + 1;
     this.question17.hide();
     this.input18.hide();
     this.next17.hide();
     this.question18 = createElement("h4", "Q8. WHO WAS THE FIRST ASIAN TO WIN A NOBEL PRIZE IN PHYSICS  ?")
     this.question18.position(250,400)
     this.input19 = createInput("");
     this.input19.position(275,440)
     this.next18 = createButton("Next")
     this.next18.position(600,600)

     this.next18.mousePressed(()=>{
      if( this.input19.value("C.V. Raman")){ 
   
    this.score2 =this.score2 + 1;
     this.question18.hide();
     this.input19.hide();
     this.next18.hide();
     this.question19 = createElement("h4", "Q9. WHAT IS THE SUBSTANCE WE GET WHEN WE COMBINE 1 ATOM OF SODIUM AND 1 ATOM OF CHLORINE ?")
     this.question19.position(250,400)
     this.input20 = createInput("");
     this.input20.position(275,440)
     this.next19 = createButton("Next")
     this.next19.position(600,600)

     this.next19.mousePressed(()=>{
      if( this.input20.value("Salt")){ 
    
    this.score2 = this.score2 + 1;
     this.question19.hide();
     this.input20.hide();
     this.next19.hide();
     this.question20 = createElement("h4", "Q10. WHO DID THE FAMOUS KITE-KEY-ELECTRICITY EXPIREMENT ?")
     this.question20.position(250,400)
     this.input21 = createInput("");
     this.input21.position(275,440)
     this.next20 = createButton("Next")
     this.next20.position(600,600)

     this.next20.mousePressed(()=>{
      if( this.input21.value("Benjamin Franklin")){ 
    
    this.score2 = this.score2 + 1;
     this.question20.hide();
     this.input21.hide();
     this.next20.hide();
        
     this.zzz1 = createElement("h4", "THANKS FOR PLAYING")
     this.zzz1.position(700,400)
     this.next21 = createButton("Next")
     this.next21.position(600,600)
     
     this.next21.mousePressed(()=>{
      
  
     this.next21.hide();
      this.zzz1.hide(); 
      this.points1.position(900,300)
      this.answers10 = createElement("h4", "Q1. Answer is Hygrometer")
      this.answers10.position(600,250)
      this.answers11 = createElement("h4", "Q2. Answer is Newton")
      this.answers11.position(600,300)
      this.answers12 = createElement("h4", "Q3. Answer is Light Year")
      this.answers12.position(600,350)
      this.answers13 = createElement("h4", "Q4. Answer is 32")
      this.answers13.position(600,400)
      this.answers14 = createElement("h4", "Q5. Answer is Proxima Centurai")
      this.answers14.position(600,450)
      this.answers15 = createElement("h4", "Q6. Answer is Albert Einstein ")
      this.answers15.position(600,500)
      this.answers16 = createElement("h4", "Q7. Answer is John Logie Baird")
      this.answers16.position(600,550)
      this.answers17 = createElement("h4", "Q8. Answer is C.V.Raman")
      this.answers17.position(600,600)
      this.answers18 = createElement("h4", "Q9. Answer is Salt")
      this.answers18.position(600,650)
      this.answers19 = createElement("h4", "Q10. Answer is Benjamin Franklin")
      this.answers19.position(600,700)



     this.back2 = createButton("Back")
     this.back2.position(900,600)

     this.back2.mousePressed(()=>{
      this.back2.hide();
      this.answers10.hide()
      this.answers11.hide()
      this.answers12.hide()
      this.answers13.hide()
      this.answers14.hide()
      this.answers15.hide()
      this.answers16.hide();
      this.answers17.hide()
      this.answers18.hide()
      this.answers19.hide()

      this.button2.show();
      this.button3.show();
      this.button4.show();

      this.points1.hide()
      



     })
      
    });

      }
    });

      }
    });

      }
    });

      }
    });

      }
    });

      }
    });

      }
    });

    
    }
    });
  }
});

  } 
});
  

})

this.button6.mousePressed(() =>{
  this.score2 = 0;
   this.points1 = createElement("h4", "SCORE = " +this.score2)
   this.points1.position(800,250)
  this.input.hide();
   this.button5.hide();
   this.button6.hide();
   this.button7.hide();
   
   
   

   this.question11 = createElement("h4", "Q1. WHAT IS THE INSTRUMENT USED TO MEASURE HUMIDITY ?")
   this.question11.position(250,400)
   this.input12 = createInput("");
   this.input12.position(275,440)
  
   this.next11 = createButton("Next")
   this.next11.position(600,600)
   

   
   this.next11.mousePressed (()=>{
     if( this.input12.value("Hygrometer")){ 
   
   this.score2 =this.score2 + 1;
    this.question11.hide();
    this.input12.hide();
    this.next11.hide();
    this.question12 = createElement("h4", "Q2. WHAT IS THE S.I. UNIT OF FORCE?")
    this.question12.position(250,400)
    this.input13 = createInput("");
    this.input13.position(275,440)
    this.next12 = createButton("Next")
    this.next12.position(600,600)
  

    this.next12.mousePressed(()=>{
      if( this.input13.value("Newton")){ 
     
    this.score2 =this.score2 + 1;
     this.question12.hide();
     this.input13.hide();
     this.next12.hide();
     this.question13 = createElement("h4", "Q3. WHAT IS THE UNIT TO DISTANCE BETWEEN PLANETS AND COSMIC BODIES ?")
     this.question13.position(250,400)
     this.input14 = createInput("");
     this.input14.position(275,440)
     this.next13 = createButton("Next")
     this.next13.position(600,600)
    

    this.next13.mousePressed(()=>{
      if( this.input14.value("Light Year")){ 
   
    this.score2 =this.score2 + 1;
     this.question13.hide();
     this.input14.hide();
     this.next13.hide();
     this.question14 = createElement("h4", "Q4. WHAT IS THE FARHENHEIT VALUE OF 0 DEGREE CELSIUS ?")
     this.question14.position(250,400)
     this.input15 = createInput("");
     this.input15.position(275,440)
     this.next14 = createButton("Next")
     this.next14.position(600,600)

     this.next14.mousePressed(()=>{
      if( this.input15.value("32")){ 
        
    this.score =this.score + 1;
     this.question14.hide();
     this.input15.hide();
     this.next14.hide();
     this.question15 = createElement("h4", "Q5. WHICH IS THE NEAREST STAR TO EARTH AFTER THE SUN ?")
     this.question15.position(250,400)
     this.input16 = createInput("");
     this.input16.position(275,440)
     this.next15 = createButton("Next")
     this.next15.position(600,600)

     this.next15.mousePressed(()=>{
      if( this.input16.value("Proxima Centurai")){ 
     
    this.score2 =this.score2 + 1;
     this.question15.hide();
     this.input16.hide();
     this.next15.hide();
     this.question16 = createElement("h4", "Q6. WHO STATED THE THEORY OF RELATIVITY ?")
     this.question16.position(250,400)
     this.input17 = createInput("");
     this.input17.position(275,440)
     this.next16 = createButton("Next")
     this.next16.position(600,600)

     this.next16.mousePressed(()=>{
      if( this.input17.value("Albert Einstein")){ 
    
    this.score2 =this.score2 + 1;
     this.question16.hide();
     this.input17.hide();
     this.next16.hide();
     this.question17 = createElement("h4", "Q7. WHO INVENTED THE FIRST TV ?")
     this.question17.position(250,400)
     this.input18 = createInput("");
     this.input18.position(275,440)
     this.next17 = createButton("Next")
     this.next17.position(600,600)

     this.next17.mousePressed(()=>{
      if( this.input18.value("John Logie Baird")){ 
     
    this.score2 =this.score2 + 1;
     this.question17.hide();
     this.input18.hide();
     this.next17.hide();
     this.question18 = createElement("h4", "Q8. WHO WAS THE FIRST ASIAN TO WIN A NOBEL PRIZE IN PHYSICS  ?")
     this.question18.position(250,400)
     this.input19 = createInput("");
     this.input19.position(275,440)
     this.next18 = createButton("Next")
     this.next18.position(600,600)

     this.next18.mousePressed(()=>{
      if( this.input19.value("C.V. Raman")){ 
   
    this.score2 =this.score2 + 1;
     this.question18.hide();
     this.input19.hide();
     this.next18.hide();
     this.question19 = createElement("h4", "Q9. WHAT IS THE SUBSTANCE WE GET WHEN WE COMBINE 1 ATOM OF SODIUM AND 1 ATOM OF CHLORINE ?")
     this.question19.position(250,400)
     this.input20 = createInput("");
     this.input20.position(275,440)
     this.next19 = createButton("Next")
     this.next19.position(600,600)

     this.next19.mousePressed(()=>{
      if( this.input20.value("Salt")){ 
    
    this.score2 = this.score2 + 1;
     this.question19.hide();
     this.input20.hide();
     this.next19.hide();
     this.question20 = createElement("h4", "Q10. WHO DID THE FAMOUS KITE-KEY-ELECTRICITY EXPIREMENT ?")
     this.question20.position(250,400)
     this.input21 = createInput("");
     this.input21.position(275,440)
     this.next20 = createButton("Next")
     this.next20.position(600,600)

     this.next20.mousePressed(()=>{
      if( this.input21.value("Benjamin Franklin")){ 
    
    this.score2 = this.score2 + 1;
     this.question20.hide();
     this.input21.hide();
     this.next20.hide();
        
     this.zzz1 = createElement("h4", "THANKS FOR PLAYING")
     this.zzz1.position(700,400)
     this.next21 = createButton("Next")
     this.next21.position(600,600)
     
     this.next21.mousePressed(()=>{
      
  
     this.next21.hide();
      this.zzz1.hide(); 
      this.points1.position(900,300)
      this.answers10 = createElement("h4", "Q1. Answer is Hygrometer")
      this.answers10.position(600,250)
      this.answers11 = createElement("h4", "Q2. Answer is Newton")
      this.answers11.position(600,300)
      this.answers12 = createElement("h4", "Q3. Answer is Light Year")
      this.answers12.position(600,350)
      this.answers13 = createElement("h4", "Q4. Answer is 32")
      this.answers13.position(600,400)
      this.answers14 = createElement("h4", "Q5. Answer is Proxima Centurai")
      this.answers14.position(600,450)
      this.answers15 = createElement("h4", "Q6. Answer is Albert Einstein ")
      this.answers15.position(600,500)
      this.answers16 = createElement("h4", "Q7. Answer is John Logie Baird")
      this.answers16.position(600,550)
      this.answers17 = createElement("h4", "Q8. Answer is C.V.Raman")
      this.answers17.position(600,600)
      this.answers18 = createElement("h4", "Q9. Answer is Salt")
      this.answers18.position(600,650)
      this.answers19 = createElement("h4", "Q10. Answer is Benjamin Franklin")
      this.answers19.position(600,700)



     this.back2 = createButton("Back")
     this.back2.position(900,600)

     this.back2.mousePressed(()=>{
      this.back2.hide();
      this.answers10.hide()
      this.answers11.hide()
      this.answers12.hide()
      this.answers13.hide()
      this.answers14.hide()
      this.answers15.hide()
      this.answers16.hide();
      this.answers17.hide()
      this.answers18.hide()
      this.answers19.hide()

      this.button2.show();
      this.button3.show();
      this.button4.show();

      this.points1.hide()
      



     })
      
    });

      }
    });

      }
    });

      }
    });

      }
    });

      }
    });

      }
    });

      }
    });

    
    }
    });
  }
});

  } 
});
  

})
      });
    });

  }
}
