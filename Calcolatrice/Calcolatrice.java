package CALCOLATRICE;

import javax.swing.*;
import java.awt.*;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.stream.IntStream;

public class calcolatrice extends JFrame {

    String num1 = " ";
    String num2 = " ";
    String segn = " ";
    String somm = " ";
    String sott = " ";
    String molt = " ";
    String divi = " ";

    int nume1 = 0;
    int nume2 = 0;
    int somma = 0;
    int sottrazione = 0;
    int moltiplicazione = 0;
    int divisione = 0;

     JTextArea textArea = new JTextArea();
    JButton zero = new JButton("0");
    JButton uno = new JButton("1");
    JButton due = new JButton("2");
    JButton tre = new JButton("3");
    JButton quattro = new JButton("4");
    JButton cinque = new JButton("5");
    JButton sei = new JButton("6");
    JButton sette = new JButton("7");
    JButton otto = new JButton("8");
    JButton nove = new JButton("9");
    JButton piu = new JButton("+");
    JButton meno = new JButton("-");
    JButton per = new JButton("*");
    JButton diviso = new JButton("/");
    JButton uguale = new JButton("=");
    JButton punto = new JButton(".");
    JButton cancella = new JButton("CE");

    public calcolatrice()
    {
        super("CALCOLATRICE");
        Container c = this.getContentPane();
        c.setLayout(new GridLayout(6,5,8,8));

        add(textArea, BorderLayout.PAGE_START);

        c.add(zero);
        c.add(uno);
        c.add(due);
        c.add(tre);
        c.add(quattro);
        c.add(cinque);
        c.add(sei);
        c.add(sette);
        c.add(otto);
        c.add(nove);

        c.add(piu,BorderLayout.SOUTH);
        c.add(meno,BorderLayout.SOUTH);
        c.add(per,BorderLayout.SOUTH);
        c.add(diviso,BorderLayout.SOUTH);
        c.add(punto,BorderLayout.SOUTH);
        c.add(cancella,BorderLayout.SOUTH);
        c.add(uguale,BorderLayout.SOUTH);

        //metodi per visualizzazione numeri sulla textArea


        zero.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                textArea.append("0");

            }
        });

        uno.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                textArea.append("1");

            }
        });

        due.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                textArea.append("2");

            }
        });

        tre.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                textArea.append("3");

            }
        });

        quattro.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                textArea.append("4");

            }
        });

        cinque.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                textArea.append("5");

            }
        });

        sei.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                textArea.append("6");

            }
        });

        sette.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                textArea.append("7");

            }
        });

        otto.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                textArea.append("8 ");

            }
        });

        nove.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                textArea.append("9");

            }
        });

        //metodi per visualizzazione segni

        piu.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                segn = " ";
                nume1 = 0;
                num1 = textArea.getText();

                nume1 = Integer.valueOf(num1);

                textArea.setText(" ");
                segn = "+";
            }
        });

        meno.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                segn = " ";
                num1 = textArea.getText();

                textArea.setText(" ");
                segn = "-";

            }
        });

        per.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                segn = " ";
                num1 = textArea.getText();

                textArea.setText(" ");
                segn = "*";

            }
        });

        diviso.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                segn = " ";
                num1 = textArea.getText();

                textArea.setText(" ");
                segn = "/";
            }
        });

        cancella.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                textArea.setText(" ");

            }
        });

        //metodo per il segno uguale-somma

        uguale.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                somm = " ";
                sott = " ";
                molt = " ";
                divi = " ";

                somma = 0;
                sottrazione = 0;
                moltiplicazione = 0;
                divisione = 0;

                num2 = textArea.getText();
                nume2 = Integer.valueOf(num2);

                somma = nume1 + nume2;
                somm = String.valueOf(somma);

                if(segn == "+")
                {
                    textArea.append(somm);
                }
            }
        });

        setSize(400,400);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

}
