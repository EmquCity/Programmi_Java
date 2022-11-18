import javax.swing.*;
import java.awt.*;

public class tavolaPitagorica extends JFrame
{
    public tavolaPitagorica()
    {
        super("tavola pitagorica");
        setLayout(new GridLayout(10, 10));

        for(int i = 1; i <= 10; i++)
        {
            for(int j = 0; j <= 10; j++)
            {
                getContentPane().add(new JLabel("" + (i * j)));
            }
        }

        setSize(500, 500);
        setVisible(true);
    }
}