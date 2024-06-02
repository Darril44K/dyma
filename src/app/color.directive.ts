import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[appColor],[appTest]'
})
export class ColorDirective implements OnInit {
    @Input('appColor') public surlignageColor: {
        color: string;
        backgroundColor: string;
    } | undefined;

    @Input('appTest') public testColor: {
        color: string;
        backgroundColor: string;
        fontsize : string;
    } | undefined;

    @HostListener("mouseenter", ['$event']) private surligner(event : MouseEvent){
        console.log("mouse : ",event );
        this.el.nativeElement.style.color = this.surlignageColor?.color;
        this.el.nativeElement.style.backgroundColor = this.surlignageColor?.backgroundColor;
        this.el.nativeElement.style.color = this.testColor?.color;
        this.el.nativeElement.style.fontSize = this.testColor?.fontsize;
        this.el.nativeElement.style.backgroundColor = this.testColor?.backgroundColor;
    } 

    @HostListener("mouseleave") private leave(){
        this.el.nativeElement.style.color = '#444';
        this.el.nativeElement.style.backgroundColor = 'transparent';
        this.el.nativeElement.style.fontSize = '16px';
    } 

    // @HostListener('window:click',["$event"]) private test(event : MouseEvent){
    //     console.log("mouse envent",event);
    // }

    // @Input() @HostBinding('class') public class:any;
    // @HostBinding('attr.role') public role:any;
    // @HostBinding('style.backgroundColor') public color:any;

    

    constructor(private el: ElementRef<any>){
        
    }  

    ngOnInit(): void {
       // console.log(this.class);
        //this.class = 'test';
        //this.role = 'admin';
        //this.color = 'orange';
        
    }
}