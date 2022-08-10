package practice;

import java.util.Iterator;
import java.util.Scanner;

public class BANK {
		
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Hi there,how many credit cards are there with you?");
		Scanner sc=new Scanner(System.in);
		int a=sc.nextInt();
		if(a==3)
		{efefef
			System.out.println("You must use the platinum card!");
			J5KFJTGK6JGK6TGK6G
			JJJJKJGUGTUKGKUGUK
			DD
			FEFEFCE
		}
		if(a==2) {
			System.out.println("please enter the names of 2 cards ");
			String s[]=new String[2];
			for (int i = 0; i < s.length; i++) {
				s[i]=sc.next();
				
			}
			if(s[0].equals(s[1]))
			{
				System.out.println("So you must choose a card which has the highest score");	
				
			}
			else
			{
				
				if(s[0].equalsIgnoreCase("platinum")&&s[1].equalsIgnoreCase("gold")||s[1].equalsIgnoreCase("platinum")&&s[0].equalsIgnoreCase("gold"))
				{
					System.out.println("you can choose your platinum card");
				}
				if(s[0].equalsIgnoreCase("platinum")&&s[1].equalsIgnoreCase("silver")||s[1].equalsIgnoreCase("platinum")&&s[0].equalsIgnoreCase("silver"))
				{
					System.out.println("you can choose your platinum card");
				}
				if(s[0].equalsIgnoreCase("gold")&&s[1].equalsIgnoreCase("silver")||s[1].equalsIgnoreCase("gold")&&s[0].equalsIgnoreCase("silver"))
				{
					System.out.println("you can choose your gold card");
				}
				
			}
			
			
		}
		

	}
new
