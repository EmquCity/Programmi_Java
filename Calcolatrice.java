import javax.swing.*;
import java.awt.*;
import java.awt.GridLayout;
import java.awt.Font;
import java.awt.BorderLayout;

public class Calcolatrice extends JFrame 
{   
    JButton piu = new JButton("+");
    JButton meno = new JButton("-");
    JButton per = new JButton("*");
    JButton diviso = new JButton("/");
    JButton uguale = new JButton("=");
    JButton punto = new JButton(".");
    JButton cancella = new JButton("CE");
    
    JTextField display1 = new JTextField(40);
    
    public Calcolatrice() 
    {
        super("GridÃLayout");
        Container c = this.getContentPane();
        c.setLayout(new GridLayout(5,4,5,5));
        
        display1.setFont(new Font("Tahoma", Font.BOLD, 20));
        display1.setHorizontalAlignment(JTextField.RIGHT);
        
        c.add(display1,BorderLayout.NORTH);
        c.add(cancella,BorderLayout.NORTH);
        c.add(uguale,BorderLayout.NORTH);
        
        for(int i = 9; i>=0; i--)
        {
           c.add(new JButton(String.valueOf(i)));
        }
        
        
        c.add(piu,BorderLayout.SOUTH);
        c.add(meno,BorderLayout.SOUTH);
        c.add(per,BorderLayout.SOUTH);
        c.add(diviso,BorderLayout.SOUTH);
        c.add(punto,BorderLayout.SOUTH);
        
        setSize(400,400);
        setVisible(true);
    }
}
