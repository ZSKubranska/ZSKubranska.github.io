dnes = new Date();
mesiac = dnes.getMonth() + 1;
den = dnes.getDate();
kalendar = new Array("Nov� rok", "Alexandra", "Daniela", "Drahoslav", "Andrea", "Ant�nia",
	"Bohuslava/R�bert", "Sever�n", "Alexej", "D�a", "Malv�na",
	"Ernest", "Rastislav", "Radovan", "Dobroslav", "Krist�na",
	"Nata�a", "Bohdana", "Drahom�ra", "Dalibor", "Vincent", "Zora",
	"Milo�", "Timotej", "Gejza", "Tamara", "Bohu�", "Alfonz",
	"Ga�par", "Ema", "Emil",
	"Tatiana", "Erika/Erik", "Bla�ej", "Veronika", "Ag�ta", "Dorota",
	"Vanda", "Zoja", "Zdenko", "Gabriela", "Dezider", "Perla",
	"Arp�d", "Valent�n", "Pravoslav", "Ida", "Miloslava", "Jarom�r",
	"Vlasta", "L�via", "Eleon�ra", "Etela", "Roman/Romana",
	"Matej", "Frederik/Frederika", "Viktor", "Alexander",
	"Zlatica", "",
	"Alb�n", "Ane�ka", "Bohumil/Bohumila", "Kazim�r", "Fridrich",
	"Radoslav/Radoslava", "Tom�/R�bert", "Alan/Alana", "Franti�ka",
	"Branislav/Bruno", "Angela/Angelika", "Gregor", "Vlastimil",
	"Matilda", "Svetlana", "Boleslav", "�ubica", "Eduard", "Jozef",
	"V�azoslav", "Blahoslav", "Be�adik", "Adri�n", "Gabriel",
	"Mari�n", "Emanuel", "Alena", "So�a", "Miroslav", "Vieroslava",
	"Benjam�n",
	"Hugo", "Zita", "Richard", "Izidor", "Miroslava", "Irena",
	"Zolt�n/R�bert", "Albert", "Milena", "Igor", "J�lius", "Estera",
	"Ale�", "Just�na", "Fedor", "Dana/Danica", "Rudolf", "Val�r",
	"Jela", "Marcel", "Erv�n", "Slavom�r", "Vojtech", "Juraj",
	"Marek", "Jaroslava", "Jaroslav", "Jarmila", "Lea",
	"Anast�zia",
	"Sviatok pr�ce", "�igmund", "Galina", "Flori�n", "Lesana/Lesia", "Herm�na",
	"Monika/R�bert", "Ingrida", "Roland", "Vikt�ria", "Bla�ena",
	"Pankr�c", "Serv�c", "Bonif�c", "�ofia", "Svetoz�r", "Gizela",
	"Viola", "Gertr�da", "Bernard", "Zina", "J�lia/Juliana",
	"�elm�ra", "Ela", "Urban", "Du�an", "Iveta", "Viliam", "Vilma",
	"Ferdinand", "Petronela/Petrana",
	"�aneta", "X�nia", "Karol�na", "Lenka", "Laura", "Norbert",
	"R�bert", "Medard", "Stanislava", "Margar�ta", "Dobroslava",
	"Zlatko", "Anton", "Vasil", "V�t", "Blanka", "Adolf", "Vratislav",
	"Alfr�d", "Val�ria", "Alojz", "Paul�na", "Sid�nia", "J�n",
	"Tade�", "Adriana", "Ladislav/Ladislava", "Beata",
	"Peter/Pavol/Petra", "Mel�nia",
	"Diana", "Berta", "Miloslav", "Prokop", "Cyril/Metod", "Patrik/Patr�cia",
	"Oliver", "Ivan", "Lujza", "Am�lia", "Milota", "Nina", "Margita",
	"Kamil", "Henrich", "Drahom�r", "Bohuslav", "Kamila", "Du�ana",
	"I�ja/Eli�", "Daniel", "Magdal�na", "O�ga", "Vladim�r",
	"Jakub", "Anna/Hana", "Bo�ena", "Kri�tof", "Marta", "Libu�a",
	"Ign�c",
	"Bo�idara", "Gust�v", "Jergu�", "Dominik/Dominika", "Hortenzia",
	"Jozef�na", "�tef�nia", "Oskar", "�ubom�ra", "Vavrinec",
	"Zuzana", "Darina", "�ubom�r", "Mojm�r", "Marcela", "Leonard",
	"Milica", "Elena/Helena", "L�dia", "Anabela", "Jana", "Tichom�r",
	"Filip", "Bartolomej", "�udov�t", "Samuel", "Silvia", "August�n",
	"Nikola/Nikolaj", "Ru�ena", "Nora",
	"Drahoslava", "Linda", "Belo", "Roz�lia", "Reg�na", "Alica",
	"Marianna", "Miriama", "Martina", "Oleg", "Bystr�k",
	"M�ria", "Ctibor", "�udomil", "Jolana", "�udmila", "Olympia",
	"Eug�nia", "Kon�tant�n", "�uboslav/�uboslava", "Mat��", "M�ric",
	"Zdenka", "�ubo�/�ubor", "Vladislav", "Edita", "Cypri�n",
	"V�clav", "Michal/Michaela", "Jarol�m",
	"Arnold", "Levoslav", "Stela", "Franti�ek", "Viera", "Nat�lia",
	"Eli�ka", "Brigita", "Dion�z", "Slavom�ra", "Valent�na",
	"Maximili�n", "Koloman", "Boris", "Ter�zia", "Vladim�ra",
	"Hedviga", "Luk�", "Kristi�n", "Vendel�n", "Ur�u�a", "Sergej",
	"Alojzia", "Kvetoslava", "Aurel", "Demeter", "Sab�na", "Dobromila",
	"Kl�ra", "�imon/Simona", "Aur�lia",
	"Denis/Denisa", "", "Hubert", "Karol", "Imrich", "Ren�ta",
	"Ren�", "Bohum�r", "Teodor", "Tibor", "Martin/Maro�", "Sv�topluk",
	"Stanislav", "Irma", "Leopold", "Agnesa", "Klaudia", "Eugen",
	"Al�beta", "F�lix", "Elv�ra", "Cec�lia", "Klement", "Em�lia",
	"Katar�na", "Kornel", "Milan", "Henrieta", "Vratko",
	"Ondrej/Andrej",
	"Edmund", "Bibi�na", "Oldrich", "Barbora", "Oto", "Mikul�",
	"Ambr�z", "Mar�na", "Izabela", "Rad�z", "Hilda", "Ot�lia",
	"Lucia", "Branislava/Bronislava", "Ivica", "Alb�na", "Korn�lia",
	"Sl�va/Sl�vka", "Judita", "Dagmara", "Bohdan", "Adela", "Nade�da",
	"Adam/Eva", "Vianoce", "�tefan", "Filom�na", "Ivana/Ivona", "Milada",
	"D�vid", "Silvester");
dniVMesiaci = new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
kalendarIndex = 0;
for (i = 0; i < (mesiac - 1); i++) kalendarIndex += dniVMesiaci[i];
kalendarIndex += (den - 1);
const nameday = document.querySelector("#names");
const namedayspan = nameday.querySelector("span");
namedayspan.textContent = "Dnes m� meniny " + kalendar[kalendarIndex] + " | Zajtra m� meniny " + kalendar[kalendarIndex + 1]