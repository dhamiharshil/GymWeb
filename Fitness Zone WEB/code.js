<html>
	<head>
		<script language="javascript">
			function validate()
			{
				if(document.myform.FName.value="")
				{
					alert("Please enter your first name");
					document.myform.Nname.focus();
				}	

				if(document.myform.LName.value=="")
				{
					alert("Please enter your Last name");
					document.myform.LName.focus();
				}
			}
		</script>
	</head>
</html>